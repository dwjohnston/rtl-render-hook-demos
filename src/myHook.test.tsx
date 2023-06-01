import { renderHook } from "@testing-library/react-hooks";
import { useData } from "./myHook";

describe(useData, () => {

    it("Naive waiting example", async () => {
        // This works, but has an act warning 
    
        const {result} = renderHook(() => useData()); 

        expect(result.current).toBe(null);

        await new Promise(res => setTimeout(res, 2000));
        expect(result.current).toBe("foo");

    }); 


    it("wait for update", async () => {
        // This works! Nice!
    
        const {result, waitForNextUpdate} = renderHook(() => useData()); 

        expect(result.current).toBe(null);

        await waitForNextUpdate();
        expect(result.current).toBe("foo");

    }); 
})