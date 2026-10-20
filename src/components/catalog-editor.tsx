'use client';

import { useMemo, useState } from 'react';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { saveCatalogItem } from '@/lib/catalog-actions';
import { useToast } from '@/components/toast';
import { catalogUrl, type CatalogCategory, type CatalogItem } from '@/lib/catalog-base';

export function CatalogEditor({ item, isNew }: { item: CatalogItem; isNew?: boolean }) {
  const router = useRouter();
  const [slug, setSlug] = useState(item.slug);
  const [name, setName] = useState(item.name);
  const [image, setImage] = useState(item.image);
  const [images, setImages] = useState(item.images.join('\n'));
  const [pending, setPending] = useState(false);
  const toast = useToast();
  const url = useMemo(() => catalogUrl(item.category, slug || 'your-service'), [item.category, slug]);
  const gallery = images.split('\n').map((line) => line.trim()).filter(Boolean);

  async function onUpload(file: File | undefined, target: 'main' | 'extra') {
    if (!file) return;
    const body = new FormData();
    body.set('file', file);
    const response = await fetch('/api/admin/upload', { method: 'POST', body });
    const data = await response.json();
    if (!response.ok || !data.url) {
      toast.error(data.error || 'Could not upload that image.', 'Upload failed');
      return;
    }
    toast.success('The image is ready to save.', 'Image added');
    if (target === 'main') setImage(data.url);
    else setImages((current) => (current.trim() ? `${current.trim()}\n${data.url}` : data.url));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const result = await saveCatalogItem(new FormData(e.currentTarget));
    setPending(false);
    if (result?.error) {
      toast.error(result.error, 'Could not save');
      return;
    }
    toast.success(isNew ? 'The new service is on the site.' : 'Your changes are saved.', 'Saved');
    router.push(`/admin/catalog/${item.category}`);
    router.refresh();
  }

  return (
    <form className="cat-editor" onSubmit={onSubmit}>
      <input type="hidden" name="category" value={item.category satisfies CatalogCategory} />
      <div className="cat-editor-grid">
        <section className="admin-panel">
          <div className="admin-panel-head"><h2>{isNew ? 'New service' : 'Edit service'}</h2></div>
          <div className="cat-fields">
            <label>Name<input name="name" value={name} onChange={(e) => { setName(e.target.value); if (isNew) setSlug(e.target.value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')); }} required /></label>
            <label>URL slug<input name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required /></label>
            <p className="cat-url">Public URL <a href={url} target="_blank" rel="noreferrer">{url}</a></p>
            <label>Short line<input name="short" defaultValue={item.short} /></label>
            <label>Description<textarea name="description" rows={4} defaultValue={item.description} /></label>
            <div className="cat-pair">
              <label>Price<input name="price" defaultValue={item.price} /></label>
              <label>Duration<input name="duration" defaultValue={item.duration} /></label>
            </div>
            <label>Highlights <small>one per line</small><textarea name="highlights" rows={4} defaultValue={item.highlights.join('\n')} /></label>
            <label>SEO title<input name="seoTitle" defaultValue={item.seoTitle} /></label>
            <label>SEO description<textarea name="seoDescription" rows={3} defaultValue={item.seoDescription} /></label>
          </div>
        </section>
        <section className="admin-panel">
          <div className="admin-panel-head"><h2>Images</h2><span>{item.source === 'supabase' ? 'Saved' : 'Not saved yet'}</span></div>
          <div className="cat-fields">
            <label>Main image
              <input name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="/images/..." />
            </label>
            {image ? <img className="cat-preview" src={image} alt="" /> : <p className="admin-empty">No image yet.</p>}
            <label className="cat-upload">Replace image<input type="file" accept="image/*" onChange={(e) => onUpload(e.target.files?.[0], 'main')} /></label>
            <label>More images <small>one path per line</small>
              <textarea name="images" rows={4} value={images} onChange={(e) => setImages(e.target.value)} />
            </label>
            <label className="cat-upload">Add another image<input type="file" accept="image/*" onChange={(e) => onUpload(e.target.files?.[0], 'extra')} /></label>
            {gallery.length ? (
              <div className="cat-thumbs">
                {gallery.map((src) => <img key={src} src={src} alt="" />)}
              </div>
            ) : null}
          </div>
        </section>
      </div>
      <div className="save-bar">
        <p>{isNew ? 'Add this service to the site.' : 'Updates the live page, URL and SEO.'}</p>
        <button className="save-btn" type="submit" disabled={pending}>
          <Save size={16} />
          {pending ? 'Saving…' : 'Save changes'}
        </button>
      </div>
    </form>
  );
}
