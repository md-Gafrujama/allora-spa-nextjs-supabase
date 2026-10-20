import { requireAdmin } from '@/lib/admin-auth';
import { PasswordForm } from '@/components/password-form';

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  const user = await requireAdmin();

  return (
    <div className="admin-page profile-page">
      <section className="admin-panel">
        <div className="admin-panel-head">
          <h2>Profile</h2>
        </div>
        <dl className="profile-meta">
          <div>
            <dt>Name</dt>
            <dd>{user.name}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </div>
        </dl>
      </section>
      <section className="admin-panel" id="password">
        <div className="admin-panel-head">
          <h2>Change password</h2>
        </div>
        <PasswordForm />
      </section>
    </div>
  );
}
