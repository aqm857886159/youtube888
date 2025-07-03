"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Play, FileText, Clock, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Zap className="mr-2 h-4 w-4" />
              信息获取效率工具
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                <span className="block leading-relaxed">YouTube英文视频</span>
                <span className="block text-blue-600 leading-relaxed">→ 高质量中文长文</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">英语是世界最好的信息源，阅读是最快的吸收信息方式</p>

              <p className="text-lg text-gray-500">一行命令，将YouTube英文视频转换为可收藏的中文深度内容</p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                阅读速度是观看的3-5倍
              </div>
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4 text-green-500" />
                支持检索、标记、引用
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="粘贴YouTube视频链接..." className="flex-1 h-12 text-base" />
                <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                  开始转换
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">支持TED、播客、技术分享、纪录片等所有类型的英文视频</p>
            </div>
          </div>

          {/* Right Column - Visual Demo */}
          <div className="relative">
            <div className="space-y-8">
              {/* YouTube Video Card - Simplified */}
              <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <Play className="h-6 w-6 text-red-500 animate-pulse" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">英文YouTube视频</span>
                    <span className="text-sm text-gray-600">60分钟观看时间</span>
                  </div>
                </div>
                
                {/* Simplified video representation */}
                <div className="relative bg-red-100 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-3 animate-bounce">
                    <Play className="h-8 w-8 text-white fill-current ml-1" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">English Tech Talk</p>
                  <div className="flex justify-center mt-3 space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>

              {/* Animated Arrow */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="rounded-full bg-blue-100 p-4 animate-pulse">
                    <ArrowRight className="h-6 w-6 text-blue-600 animate-bounce" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border-2 border-blue-200 animate-ping"></div>
                </div>
              </div>

              {/* Article Card - Enhanced */}
              <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-green-500 animate-pulse" />
                  <div>
                    <span className="block font-semibold text-gray-900">中文深度长文</span>
                    <span className="text-sm text-gray-600">5分钟阅读时间</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">技术核心解析</h3>
                  
                  {/* Animated content lines */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="h-2 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full flex-1 animate-pulse"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-2 bg-gradient-to-r from-green-200 to-green-100 rounded-full flex-1 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      <div className="h-2 bg-gradient-to-r from-purple-200 to-purple-100 rounded-full flex-1 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  
                  {/* Key points */}
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-sm">核心要点提取</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">技术原理</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded">实践案例</span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">最佳实践</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">性能优化</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
