test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json(); //define o que se espera
  console.log(responseBody);

  expect(Array.isArray(responseBody)).toBe(true); ///Jest espera que seja um array
});
