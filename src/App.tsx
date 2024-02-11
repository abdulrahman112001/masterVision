/////////// IMPORTS
///
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useLayoutEffect } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLoadingOverlay } from "./context/loading"
import { useIsRTL } from "./hooks/useIsRTL"
import { AllRoutesProvider } from "./routing/allRoutes"

///
const App = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const isRTL = useIsRTL()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///
  useLayoutEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [])
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///

  // const { visible, toggle, open, close } = useLoadingOverlay()

  return (
    <>
      {/* <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // emotionCache={isRTL ? rtlCache : undefined}
        theme={{ dir: isRTL ? "rtl" : "ltr", colorScheme: "light" }}
      >
        <ModalsProvider>
          <Box pos="relative">
            <LoadingOverlay
              visible={visible}
              zIndex={10000}
              loader={<Spinner />}
              overlayColor="black"
              overlayOpacity={0.9}
            /> */}
            <AllRoutesProvider />
            <ToastContainer rtl={isRTL} />
            <ReactQueryDevtools
              initialIsOpen={false}
              position={"bottom-right"}
            />
          {/* </Box>
        </ModalsProvider>
      </MantineProvider> */}
    </>
  )
}
export default App
