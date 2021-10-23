import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction} from './actions/register.action';
import {AuthModule} from '../auth.module';

const initialState: AuthStateInterface = {
    isSubmitting: false,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
        })
    )
);

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
