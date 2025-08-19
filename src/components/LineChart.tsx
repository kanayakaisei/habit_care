"use client";
import { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

interface LineChartProps {
    foodDate: number[],
    sleepDate: number[],
    sportsDate: number[],
}

export default function LineChart({ foodDate, sleepDate, sportsDate }: LineChartProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const labels = ['月', '火', '水', '木', '金', '土', '日'];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: '食事',
                    data: foodDate,
                    fill: false,
                    borderColor: 'rgb(255, 191, 63)',
                    borderWidth: 3,
                    tension: 0.1,
                },
                {
                    label: '運動',
                    data: sportsDate,
                    fill: false,
                    borderColor: 'rgb(255, 63, 127)',
                    borderWidth: 3,
                    tension: 0.1
                },
                {
                    label: '睡眠',
                    data: sleepDate,
                    fill: false,
                    borderColor: 'rgb(63, 153, 255)',
                    borderWidth: 3,
                    tension: 0.1
                }
            ]
        };

        const config = {
            type: 'line' as const,
            data: data,
            options: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'line',
                            font: {
                                size: 16
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 90,
                        ticks: {
                            stepSize: 30,
                            font: {
                                size: 16
                            }
                        },
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 16
                            }
                        },
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    }
                }
            }
        };

        const chartInstance = new Chart(ctx, config);
        return () => {
            chartInstance.destroy();
        };
    }, [foodDate, sleepDate, sportsDate]);

    return (
        <div>
            <canvas
                className="px-[20px] pb-[30px]"
                ref={canvasRef} width={320} height={250} />
        </div>
    );
}
