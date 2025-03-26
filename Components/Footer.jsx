const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
          <footer className="bg-gray-300 py-6 shadow-xl">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm " style={{color:"#1F313B"}}>
        &copy; @2025 SpotUrSpace. All rights reserved.
      </p>
    </div>
  </footer>
     );
}
 
export default Footer;