

export default function Container({children}: any) {
    return (
      <div className="flex flex-col items-start justify-center min-h-screen">
        {children}
      </div>
    );
  }