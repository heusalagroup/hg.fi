// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { CODE_PREVIEW_CLASS_NAME } from "../../constants/className";
import { ReactNode } from "react";
import "./CodePreview.scss";

export interface CodePreviewProps {
    readonly title      : string;
    readonly className ?: string;
    readonly children  ?: ReactNode;
}

export function CodePreview (props: CodePreviewProps) {
    const className = props?.className;
    const children = props?.children;
    const title = props?.title;
    return (
        <div className={
            CODE_PREVIEW_CLASS_NAME
            + (className? ` ${className}` : '')
        }>
            <h4>{title}</h4>
            <pre>{children}</pre>
        </div>
    );
}
