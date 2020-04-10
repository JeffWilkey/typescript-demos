const profile = {
  full_name: 'jeff w.',
  age: 28,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, full_name }: { age: number; full_name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(`${full_name} is ${age} at ${lat}, ${lng}`);
