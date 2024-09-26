

export default function Teste({params}) {
 
    return (
      <button className="text-2xl font-bold bg-rocketseat rounded-lg p-2 hover:bg-violet-600">
          teste: {JSON.stringify(params)}
      </button>
    );
  }