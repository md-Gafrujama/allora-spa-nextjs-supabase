import { redirect } from 'next/navigation';

export default function ChangePasswordRedirect() {
  redirect('/admin/profile#password');
}
