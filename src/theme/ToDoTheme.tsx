import { ConfigProvider, theme } from "antd"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={{
      token: {

      },
      components: {
        Layout: {
          footerBg: 'rgba(0, 0, 0, 0.2)',
          headerBg: 'rgba(0, 0, 0, 0.2)',
        },
      }
    }}
    >
      {children}
    </ConfigProvider>
  )
}