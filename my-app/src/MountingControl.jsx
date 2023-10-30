import { useEffect, useRef } from "react";

export function MountingControl() {
    const mountedRef = useRef(false);
    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true;
            console.log('Mounting first time')
        }
        else {
            console.log('Mounting second time')
        }
    })
    return (
        <div>
            <p>Mounting Control</p>
        </div>
    )
}