import React, { useState } from "react"
import * as styles from "../styles/contato.module.css"
import axios from "axios"

//material ui
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"
import { useSnackbar } from "notistack"

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
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)

    axios
      .request({
        method: "POST",
        url: "/",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          "form-name": "contato",
          Nome: form.name,
          Email: form.email,
          Número: form.phone,
          Mensagem: form.message,
        },
      })
      .then(e => {
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        enqueueSnackbar("Mensagem enviada com sucesso!", {
          variant: "success",
        })
        setLoading(false)
      })
      .catch(err => {
        enqueueSnackbar("Algo de errado ocorreu!", {
          variant: "error",
        })
        console.log(err)
      })
  }

  return (
    <section className={styles.formContainer}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        name="contato"
        action="/contato"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <input type="hidden" name="form-name" value="contato" />
        <h1>Formulário de contato</h1>
        <CssTextField
          label="Nome"
          name="Nome"
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
          name="Email"
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
          name="Número"
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
          name="Mensagem"
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
