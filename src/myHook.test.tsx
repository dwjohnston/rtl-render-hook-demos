import { renderHook } from "@testing-library/react-hooks";
import { useData } from "./myHook";
import { Provider } from "react-redux";
import store from "./redux/store";

describe(useData, () => { 

    const Wrapper = ({children}) => {
        return <Provider store ={store}>
            {children}
        </Provider>
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