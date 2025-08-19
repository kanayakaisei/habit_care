import React, { useState, useEffect } from "react";

type Props = {
    onValueChange: (value: number) => void;
};

const EmoticonSelector: React.FC<Props> = ({ onValueChange }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const faces = ["😊", "🙂", "😞"];
    const scores = [30, 20, 10];

    useEffect(() => {
        if (selected !== null) {
            onValueChange(scores[selected]);
        }
    }, [selected]);

    return (
        <div className="flex justify-center items-center space-x-30 relative py-[20px]">
            {faces.map((face, index) => (
                <div key={index} className="relative flex items-center">
                    <button
                        onClick={() => setSelected(index)}
                        className={`w-5 h-5 rounded-full border-2 ${selected === index ? "border-transparent" : "border-gray-400"
                            } bg-white relative z-10`}
                    />

                    {selected === index && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 text-4xl pointer-events-none">
                            {face}
                        </div>
                    )}

                    {index !== faces.length - 1 && (
                        <div className="absolute top-1/2 left-full w-30 h-0.5 bg-gray-400"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EmoticonSelector;
