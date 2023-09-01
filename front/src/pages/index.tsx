import { useState,  } from 'react'
import { useRouter } from "next/router";
import axios from 'axios'

export default function Login() {
  const navigate = useRouter()
  const [check, setCheck] = useState(false)
  const [codigo, setCodigo] = useState('')
  const [senha, setSenha] = useState('')

  function handleChange() {
    setCheck(!check)
  }

  async function Logar() {
    try {
      const response = await axios.post('http://localhost:8000/login/', {
      codigo,
      senha,
      })
      if(check){
        localStorage.setItem('logado', '1')
        sessionStorage.setItem('logado', '0')
        navigate.push('/lista')
      }
      else{
        sessionStorage.setItem('logado', '1')
        localStorage.setItem('logado', '0')
        navigate.push('/lista')
      }
    } catch (error: any) {
      alert(error.request.response)
      
    }
  }
  
  return (
    <div className='container'>
      <h1 className='titleC'>Logar</h1>

      Codigo:<br/>
      <input className='input' type="text" name="codigo" required onChange={(e) => setCodigo(e.target.value)}/><br/>
      Senha:<br/>
      <input className='input' type="password" name="senha" required onChange={(e) => setSenha(e.target.value)}/><br/>
      <label>
        <input type='checkbox' checked={check} onChange={handleChange} />
        Deseja continuar logado?
      </label><br/>

      <button style={{marginTop: '1vh'}} className='button' onClick={Logar}>Logar</button>
    </div>
  )
}
