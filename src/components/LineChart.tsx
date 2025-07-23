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

// Chart.js に必要な要素を登録
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function LineChart() {
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
                data: [65, 20, 80, 81, 56, 55, 70],
                fill: false,
                borderColor: 'rgb(255, 191, 63)',
                tension: 0.1,
            },
            {
                label: '運動',
                data: [70, 40, 50, 60, 20, 40, 50],
                fill: false,
                borderColor: 'rgb(255, 63, 127)', // 赤
                tension: 0.1
            },
            {
                label: '睡眠',
                data: [10, 30, 20, 50, 40, 60, 80],
                fill: false,
                borderColor: 'rgb(63, 153, 255)', // 青
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
                    font: {
                        size: 16 ,// 凡例のフォントサイズ
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
                            size: 16 // Y軸のフォントサイズ
                        },
                    },
                },
                x: {
                    ticks: {
                        font: {
                        size: 16 // X軸のフォントサイズ
                        }
                    },
                    grid:{
                        display: false
                    },
                    border:{
                        display: false
                    }
                }
            }
        }
    };


    const chartInstance = new Chart(ctx, config);
    return () => {
      chartInstance.destroy(); // 再レンダリング時に破棄
    };
    }, []);
    return (
        <div>
            <canvas 
                className="px-[20px] pb-[30px]"
                ref={canvasRef} width={320} height={250} />
        </div>
        );
}
