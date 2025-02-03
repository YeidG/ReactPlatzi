function TodoCounter({total,completed}){
    return(
      <h1 className="titulo">
        Completaste {completed} de  {total} TODOs
      </h1>
    );
  }
  export {TodoCounter};