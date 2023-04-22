import { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
    return <div className="p-5 rounded-lg text-center animate__animated animate__fadeIn">{children}</div>
}
