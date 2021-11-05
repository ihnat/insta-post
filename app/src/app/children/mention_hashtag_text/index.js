import React from 'react'
import styles from '../../styles'

const MentionHashtagText = ({ children }) => {
    const prepareText = (text) => {
        const result = [];
        
        let mentList = children.match(/[@#][a-z0-9_]+/gi);
        if (mentList == null) {
            return [text];
        }
        for (const ment of mentList) {
            result.push(text.substring(0, text.indexOf(ment)));
            result.push(
                <a
                    style={styles.commentLink}
                    href={ment}>{ment}</a>
            );
            text = text.substring(text.indexOf(ment) + ment.length, text.length);
        }
        if (text.length > 0) {
            result.push(text);
        }
        return result;
    };
    return (
        <>
            {prepareText(
                children,
            )}
        </>
    );
};

export default MentionHashtagText