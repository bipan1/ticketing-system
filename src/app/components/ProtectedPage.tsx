import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getSession, Session } from 'next-auth/react';

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<{ session: Session | null }>> {
  try {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: '/auth/signin',
          permanent: false,
        },
      };
    }

    return {
      props: { session },
    };
  } catch (error) {
    console.error('Error fetching session:', error);

    return {
      redirect: {
        destination: '/auth/error',
        permanent: false,
      },
    };
  }
}

const ProtectedPage: React.FC<{ session: Session | null }> = ({ session }) => {
  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user?.email}</p>
    </div>
  );
};

export default ProtectedPage;
