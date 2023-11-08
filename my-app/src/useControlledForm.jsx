export function useConrolledForm(initialValue = ""){
    const [value, setValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return { value, onChange: handleInputChange };
}
