import React, {useState} from 'react';
import Alert from "@deprecated_components/alerts/Alert";
import {useAlertNotification} from "@src/deprecated_hooks/useAlertNotification";
import {Button} from "@src/index";

export default {
    title: 'Old CES Theme/General/Alerts',
    component: Alert,
};

// @ts-ignore
const Template = (args) => {
    const [alertActive, setAlertActive] = useState(true);

    return <>
        {alertActive && <Alert {...args} onClose={() => {
            setAlertActive(false)
        }}/>
        }
    </>;
}
export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {
    variant: 'primary',
    children: "The programm is running."
}


export const WithHookUsage = () => {
    const alertText = "Lorem ipsum";
    const {notification, notify} = useAlertNotification();

    return (
        <>
            <div className={"mb-3"}>
                <Button color={"danger"} onClick={() => {
                    notify(<>I am in <a href={"https://www.gidf.de"}>DANGER!</a></>, "danger")
                }}>
                    Danger
                </Button>
                <Button variant={"secondary"}
                        onClick={() => {
                            notify(alertText, "secondary")
                        }}>
                    Secondary
                </Button>
                <Button color={"success"}
                        onClick={() => {
                            notify(alertText, "success")
                        }}>
                    Success
                </Button>
                <Button
                        onClick={() => {
                            notify(alertText, "warning")
                        }}>
                    Warning
                </Button>
                <Button variant={"primary"}
                        onClick={() => {
                            notify(alertText, "primary")
                        }}>
                    Primary
                </Button>
            </div>
            {notification}
        </>
    )
}
