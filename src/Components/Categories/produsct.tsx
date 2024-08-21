// const Products = ({ img, name }) => {
//     return (
//       <div className="container">
//         <img src={img} alt={name} />
//         <p className="pb-3">{name}</p>
//       </div>
//     );
//   };
  
//   export default Products;
  
const Products = ({ img, name }) => {
    return (
      <div
        style={{
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className="container"
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
      >
        <img src={img} alt={name} />
        <p className="pb-3">{name}</p>
      </div>
    );
  };
  
  export default Products;
  