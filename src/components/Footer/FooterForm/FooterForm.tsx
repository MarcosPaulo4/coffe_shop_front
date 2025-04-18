"use client"
import { useAlert } from "@/components/Alert/useAlertContext";
import { StyledTextField } from "@/styles/componentStyles/StyledComponents.theme";
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Typography, } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, FormProvider, useForm } from 'react-hook-form';
import * as z from "zod";


const schema = (translate: (id: string) => string) => z.object({
  email: z.string({}).email({ message: translate('footerForm.errorEmailText') })
})

export type ScheduleFooterForm = z.infer<
  ReturnType<typeof schema>
>;

export const FooterForm = () => {
  const translate = useTranslations("Global");
  const { showAlert } = useAlert()
  const [isLoading, setIsLoading] = useState(false);


  const methods = useForm<ScheduleFooterForm>({
    resolver: zodResolver(schema(translate)),
    defaultValues: {
      email: ''
    }
  })


  const onSubmit = async () => {
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      showAlert(translate("footerForm.success"), "success")
      methods.reset()
    } catch {
      showAlert(translate("footerForm.error"), "error")
    } finally {
      setIsLoading(false)
    }


  }


  return (
    <Box maxWidth={230}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" color="white">
          {translate('footerForm.title')}
        </Typography>
        <Typography variant="h6" fontSize={13} color="white" flexWrap='wrap'>
          {translate('footerForm.about')}
        </Typography>

        <FormProvider {...methods}>
          <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={2}>
            <Controller
              name='email'
              control={methods.control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  label={translate('yourEmail')}
                  variant="filled"
                  size="small"
                  name="email"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              {isLoading ? translate("footerForm.sending") : translate("footerForm.subscribe")}
            </Button>
          </Box>

        </FormProvider>
      </Box>
    </Box>
  )
}
