import React, { useState } from "react"
import * as styles from "../styles/contato.module.css"
import axios from "axios"

//material ui
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"
import CloseIcon from "@mui/icons-material/Close"

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#222",
    borderWidth: 2,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#222",
    borderWidth: 2,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#222",
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "#222",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#222",
      borderWidth: 2,
    },
  },
})

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)

    const formData = new FormData()
    formData.append("Nome", form.name)
    formData.append("Email", form.email)
    formData.append("Número", form.phone)
    formData.append("Mensagem", form.message)
    formData.append("form-name", "Contato")

    axios({
      method: "post",
      url: "/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(e => {
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setMessage("Mensagem enviada com sucesso!")
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <section className={styles.formContainer}>
      {message && (
        <span className={styles.notification} onClick={e => setMessage("")}>
          {message} <CloseIcon />
        </span>
      )}
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        name="Contato"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h1>Formulário de contato</h1>
        <input type="hidden" name="form-name" value="Contato" />
        <CssTextField
          label="Nome"
          fullWidth
          className={styles.input}
          required
          value={form.name}
          onChange={e => {
            setForm(prev => ({ ...prev, name: e.target.value }))
          }}
        />
        <CssTextField
          label="E-mail"
          fullWidth
          className={styles.input}
          required
          value={form.email}
          onChange={e => {
            setForm(prev => ({ ...prev, email: e.target.value }))
          }}
        />
        <CssTextField
          label="Telefone"
          fullWidth
          className={styles.input}
          required
          value={form.phone}
          onChange={e => {
            setForm(prev => ({ ...prev, phone: e.target.value }))
          }}
        />
        <CssTextField
          label="Mensagem"
          fullWidth
          className={styles.input}
          required
          multiline
          minRows={5}
          maxRows={20}
          value={form.message}
          onChange={e => {
            setForm(prev => ({ ...prev, message: e.target.value }))
          }}
        />
        <LoadingButton
          loading={loading}
          loadingPosition="end"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ p: 2, fs: 2 }}
          type="submit"
        >
          Enviar
        </LoadingButton>
      </form>
    </section>
  )
}

export default Contact
