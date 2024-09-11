import React from "react";

export default function InputErrors({errors, "data-testid": dataTestid}: { errors: string[], "data-testid"?: string}) {
    if (!errors){
        return <></>;
    }

    return (
        <div data-testid={`${dataTestid}-errors`}>
            {
                typeof errors?.map === "function" && errors.map((error: string) => (
                    <span key={`${error.replace(" ", "-")}`} data-testid={`${dataTestid}-${errors.indexOf(error)}`}
                        className={"text-validation-danger-font text-xs font-bold block mt-2"}>{error}</span>
                ))
            }
        </div>
    );
}