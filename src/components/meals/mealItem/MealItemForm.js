import Input from "../../Ui/Input";
import classes from "./MealItemForm.module.css"

const MealItemForm = () => {
    return (
        <form className={classes.form} >
            <Input
                label='Amount'
                input={{
                    id : "amount",
                    type : "nummber",
                    min : "1",
                    step : '1',
                    defaultValue : "1"
                }}
            />
            <button>Add</button>
        </form>
    );
}

export default MealItemForm;