import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth/next';

const Profile = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h2>{session?.user?.name}</h2>
      {session?.user?.email && (
        <div>
          <a href={`mailto:${session?.user?.email}`}>{session?.user?.email}</a>
        </div>
      )}
      {session?.user?.image && <img src={session?.user?.image} alt="image" />}
    </div>
  );
};

export default Profile;
