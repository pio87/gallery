import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { ApplicationState } from '../store/types';

const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default useTypedSelector;
