
const Layout = ({children}) => {
  return (
	  <div className="flex flex-col h-screen bg-gray-400">
		  <nav className="flex flex-row justify-around">
			  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
			  <div>icon mitte</div>
			  <div>icon recht</div>
		  </nav>
		  <main className="flex-1 overflow-scroll">
			  {children}
		  </main>
		  <footer className="flex flex-row justify-around">
			<div className="bg-red-600">icon1</div>
		  	<div>icon2</div>
		 	<div>icon3</div>
		  </footer> 
	  </div>
  )
}

export default Layout