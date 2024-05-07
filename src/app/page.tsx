"use client"
import Button from "@/components/Button"
import {Stack, TextField, Typography} from "@mui/material"
import { useState } from "react"
import { usePaystackPayment } from 'react-paystack'
import toast from 'react-hot-toast'

const Home = () => {
  const initialData = {
    email: '',
    txId: '',
    amount: '',
  }
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const config = {
    reference: data.txId,
    email: data.email,
    amount: Math.ceil(Number(data.amount)) * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PK,
  };

  const onPaymentSuccess = async (reference: string) => {
    toast.success('Payment Successful')
    setLoading(false)
  }

  const onPaymentClose = () => {
    toast.error('Payment Cancelled')
    setLoading(false)
  }

  const PaystackHook = () => {
      const initializePayment = usePaystackPayment(config);
      return (
          <Button
          title='Pay'
          loading={loading}
          type='submit'
          fullWidth
          sx={{alignSelf: 'center', borderRadius: '5px'}}
          onClick={(e) => {
              e.preventDefault();
              if(!data.email || !data.amount|| !data.txId){
                  return toast.error('Provide all details!')
              }
              setLoading(true)
              initializePayment({onSuccess: (reference) => onPaymentSuccess(reference), onClose: onPaymentClose})
          }}
          />
      );
  };

  return (
    <Stack
    sx={{
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px'
    }}
    >
      <Typography
      variant="h3"
      textAlign='center'
      >
        Paystack Payment
      </Typography>

      {
      ( () => {
        const form = [
          {
            title: 'Email',
            value: data.email,
            onChange: (val) => setData(prevData => ({...prevData, email: val})),
            type: 'email',
          },
          {
            title: 'Amount',
            value: data.amount,
            onChange: (val) => setData(prevData => ({...prevData, amount: val})),
            type: 'number',
          },
          {
            title: 'TxId',
            value: data.txId,
            onChange: (val) => setData(prevData => ({...prevData, txId: val})),
            type: 'text',
          },
        ]

        return (
          <Stack
          sx={{
            gap: '15px',
            width: '400px',
            maxWidth: '100%',
            p: '20px'
          }}
          >
          {
          form.map( (props) => (
            <TextField 
            label={props.title}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            type={props.type}
            />
          ) )
          }

          <PaystackHook />
          </Stack>
        )
      } )()
      }
    </Stack>
  )
}

export default Home