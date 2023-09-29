import { ConfigProvider, theme } from "antd"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
      token: {

      },
      components: {
        Layout: {
          bodyBg: ' rgb(18, 0, 39)'
        },
      }
    }}
    >
      {children}
    </ConfigProvider>
  )
}