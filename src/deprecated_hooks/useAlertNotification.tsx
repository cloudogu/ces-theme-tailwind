import React, {useState} from "react";
import Alert, {AlertVariant} from "@src/deprecated_components/alerts/Alert";

export type NotifyFunction = (_message: string | JSX.Element, _variant: AlertVariant) => void

type useAlertNotificationType = {
    notification: JSX.Element,
    notify: NotifyFunction,
    clearNotification: () => void,
};
export const useAlertNotification = (): useAlertNotificationType => {
    const [alert, setAlert] = useState<JSX.Element>(<></>);
    const notify = (message: string | JSX.Element, variant: AlertVariant) => setAlert(<Alert
        variant={variant}
        onClose={() => {
            setAlert(<></>);
        }}>
        {message}
    </Alert>);

    return {
        notification: alert,
        notify: notify,
        clearNotification: () => {
            setAlert(<></>);
        }
    };
}
