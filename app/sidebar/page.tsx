import React from 'react';

const SidebarLayout: React.FC = () => {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', width: '300px' }}>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="inputField" style={{ display: 'block', marginBottom: '5px' }}>
                        Input:
                    </label>
                    <input
                        type="text"
                        id="inputField"
                        name="inputField"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="submit" style={{ padding: '8px 16px' }}>
                        Submit
                    </button>
                    <button type="button" style={{ padding: '8px 16px' }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SidebarLayout;