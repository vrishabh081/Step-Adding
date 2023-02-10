import "../style/home.css";
import { useSelector } from "react-redux";

export const Output = ()=> {
    const data = useSelector((store)=>store.reducer);
    const {payload, isLoading, isError} = data;


    // loading indicator-
    if(isLoading)
    {
        return <h1>Wait...</h1>
    }

    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Steps</th>
                    <th>Carry</th>
                    <th>Sum</th>
                </tr>
                </thead>
                {payload?.map(el=><tbody key={el.count}>
                    <tr>
                    <td>Step{el.count}</td>
                    <td>{el.step.carryString}</td>
                    <td>{el.step.sumString}</td>
                    </tr>
                </tbody>)}
            </table>
        </>
    )
}