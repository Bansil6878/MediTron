const data = [
  {
    // id='1',
    img: require('../images/medicine/medicine.png'),
    name: 'Medicine',
  },
  {
    // id='1',
    img: require('../images/doctor/doctor.png'),
    name: 'doctor',
  },
  {
    // id='1',
    img: require('../images/lab/lab.png'),
    name: 'Lab Test',
  },
  {
    // id='1',
    img: require('../images/product/product.png'),
    name: 'Product',
  },
];

const careplan_data1 =[
  {
    id:1,
    name:'Daimond Careplan',
    image:require('../images/family/family4.png'),
    des:'Flat 25% off + extra 7% saving on your orders.',
    price:'₹: 45/month',
    benifit:'Fast Delivery,Free Dcotor Consultant, Free Lab Test more'
  },
]

const careplan_data2=[
  {
    id:2,
    name:'Gold Careplan',
    image:require('../images/family/family4.png'),
    des:'Flat 15% off + extra 4% saving on your orders.',
    price:'₹: 35/month',
    benifit:'Fast Delivery,Free Dcotor Consultant, Free Lab Test more'
  },
]

const careplan_data3=[
  {
    id:3,
    name:'Silver Careplan',
    image:require('../images/family/family4.png'),
    des:'Flat 10% off + extra 3% saving on your orders.',
    price:'₹: 25/month',
    benifit:'Fast Delivery,Free Dcotor Consultant, Free Lab Test more'
  }
]

const doctor=[
{
  id:1,
  name:'Thomas',
  department:'Covid',
  image:require('../images/doctor/doctor.png'),
  Ratings:4.5,
},
{
  id:2,
  name:'Thomas',
  department:'Headache',
  image:require('../images/doctor/doctor.png'),
  Ratings:4.5,
},
{
  id:3,
  name:'Thomas',
  department:'Fever',
  image:require('../images/doctor/doctor.png'),
  Ratings:4.3,
},
{
  id:4,
  name:'Thomas',
  department:'Mental Health',
  image:require('../images/doctor/doctor.png'),
  Ratings:4.5,
},
{
  id:5,
  name:'Thomas',
  department:'Hairfall',
  image:require('../images/doctor/doctor.png'),
  Ratings:4.5,
}
]


export default data;
export {careplan_data1,careplan_data2,careplan_data3,doctor};
