import mongoose from 'mongoose';

// Generate ObjetId on https://observablehq.com/@hugodf/mongodb-objectid-generator
export default [{
  _id: mongoose.Types.ObjectId('60d4a32f257e066e9495ce08'),
  first_name: 'German',
  last_name: 'Dosko',
  email: 'german@devskode.com',
  password: 'devskode',
  role: 'Director',
  module: 'Human Resources',
}];
