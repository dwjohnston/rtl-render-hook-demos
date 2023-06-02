import { renderHook } from "@testing-library/react-hooks";
import { useData } from "./myHook";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StrictMode } from "react";

describe(useData, () => { 



    const Wrapper = (props: React.PropsWithChildren<{}>) => {
        return <StrictMode><Provider store ={store}>
            {props.children}
        </Provider></StrictMode>
    }

    it.skip("Naive waiting example", async () => {
        // This works, but has an act warning 
    
        const {result} = renderHook(() => useData()); 

        expect(result.current).toBe(null);

        await new Promise(res => setTimeout(res, 2000));
        expect(result.current).toBe("foo");

    }); 


    it("wait for update", async () => {
        // This works! Nice!
    
        const {result, waitForNextUpdate} = renderHook(() => useData(), {wrapper: Wrapper} ); 

        expect(result.current).toBe(null);

        await waitForNextUpdate();
        expect(result.current).toBe("foo");

    }); 
})