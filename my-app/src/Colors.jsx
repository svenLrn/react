export function Colors({ colors }){
    return (
        <ul>
          {colors.map((color, index) => (
            <li key={color.id}>{color.name}</li>
          ))}
        </ul>
      );
}