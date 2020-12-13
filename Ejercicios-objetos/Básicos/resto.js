let { name, email, rest } = {
    name: "Carlos",
    email: "Carlos@example.com",
    city: "Sevilla",
    state: "Andalucia",
    country: "Espana"
  };
  
  console.log(name);
  console.log(email);
  rest === { city: "Sevilla", state: "Andalucia", country: "Espana" };
  