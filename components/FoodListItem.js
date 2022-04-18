import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FoodListItem = () => {
    return (
        <div className="flex flex-row w-full text-xs items-center border-b-2 border-slate-700 pb-6">
            <div className="flex flex-col mr-4">
                <span className='text-sm font-medium'>Chicken Jhol MoMo</span>
                <span className='text-sm font-light'>Rs. 140</span>
                <span className='font-light'>+jhol,+achar</span>
            </div>
            <div className="flex flex-row h-1/2 w-fill pr-4">
                <button className="primary-button w-fit p-0"><RemoveIcon /></button>
                <input type="number" className='form-input text-secondary p-1 w-10 rounded-md text-xs mx-1 drop-shadow-xl p-auto' placeholder='2'/>
                <button className="primary-button w-fit p-0"><AddIcon /></button>
            </div>
            <span className='text-sm w-fill pr-4'>Rs. 240</span>
        <button className='text-primary bg-transparent hover:text-opacity-70 active:text-opacity-100'><DeleteOutlineIcon/></button>
        </div>
    );
}

export default FoodListItem;