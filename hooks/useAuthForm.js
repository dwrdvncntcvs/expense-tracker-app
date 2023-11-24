import { useReducer } from "react";
import { AUTH_ICONS, AUTH_TYPE } from "../configs/constants";

const authFormReducer = (state, { type, payload }) => {
    switch (type) {
        case AUTH_TYPE.SET_AUTH_VALUE:
            return {
                ...state,
                [payload.name]: payload.value,
            };
        case AUTH_TYPE.AUTH_RESET:
            return { ...state, ...payload };
        default:
            return state;
    }
};

const useAuthForm = (initialValues) => {
    const [state, dispatch] = useReducer(authFormReducer, initialValues);

    const handleChange = (name, value) => {
        dispatch({ type: AUTH_TYPE.SET_AUTH_VALUE, payload: { name, value } });
    };

    const resetForm = () => {
        dispatch({ type: AUTH_TYPE.AUTH_RESET, payload: initialValues });
    };

    const fields = Object.keys(initialValues).map((key) => {
        return {
            icon: AUTH_ICONS[key],
            name: key,
            value: state[key],
            onChange: (text) => handleChange(key, text),
            placeholder: `${key[0].toUpperCase()}${key.slice(1, key.length)}`,
        };
    });

    return { userState: state, fields, resetForm };
};

export default useAuthForm;
