// src/components/Hello.tsx

import * as React from 'react';
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Button } from 'antd-mobile';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <Button>按钮</Button>
            </div>
        );
    }
}

export default Hello

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}