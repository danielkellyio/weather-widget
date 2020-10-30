import Weather from "@/support/Weather";
describe("Weather class", () => {
  test("can get current weather by zip", async () => {
    const weather = new Weather();
    const result = await weather.byZip(35473).get();
    expect(result.status).toBe(200);
    expect(result.data.name).toBe("Northport");
    expect(result.data).toBeTruthy();
  });

  test("can get current weather by city", async () => {
    const weather = new Weather();
    const result = await weather.byCity("Northport").get();
    expect(result.status).toBe(200);
    expect(result.data.name).toBe("Northport");
  });

  test("can get current weather by lat/long", async () => {
    const weather = new Weather();
    const result = await weather
      .byGeoLocation({ lat: "33.25872330915427", long: "-87.59076732017675" })
      .get();
    expect(result.status).toBe(200);
    expect(result.data.name).toBe("Northport");
  });
});
