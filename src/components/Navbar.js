import logo from '../assets/app.png'
function Navbar(props) {
  const {toglemode,tooglebutton}=props.data;
  return (
    <div className={`navBar ${toglemode==='dark'?'bg-slate-900':'' }`}>
      <div className={`navBarHeader space-x-10 px-10 py-5 justify-between flex items-center`}>
        <nav className= {`text-md md:float-none flex space-x-10  list-none items-center ${toglemode==='light'?'text-black':'text-white' }`}>
          <img src={logo} alt="logo here" className='w-12 h-12' />
          <h3 className='text-lg tracking-widest uppercase font-bold'>XFORD Dictionary</h3>
        </nav>
        <button onClick={()=>tooglebutton(toglemode==='dark'?'light':'dark')} className={`h-6 w-12 rounded-full p-1 flex ${toglemode==='dark'?'justify-end bg-white':'justify-start bg-black'}`}>
          <div  className={`h-4 w-4 rounded-full ${toglemode==='dark'?'bg-black':'bg-white'} mx-1`} ></div>
        </button>
      </div>
    </div>

  )
}

export default Navbar