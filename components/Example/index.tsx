import { useState } from 'react';
import cn from 'classnames';
import './style.scss';

export default function Example() {
    const [isRed, setIsRed] = useState(false);

    return (
        <div
            className={cn(
                'global-container',
                { 'global-red': isRed }
            )}
            styleName={cn(
                'local-container',
                { 'local-red': isRed }
            )}
            onClick={() => setIsRed(!isRed)}
        >
            Toggle Color
        </div>
    )
}

