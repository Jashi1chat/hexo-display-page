import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Zap, Shield, Globe, Video } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    top: { backgroundColor: 'rgba(255, 255, 255, 0)' },
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.8)' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 overflow-hidden">
      <motion.header 
        className="fixed w-full z-50 px-4 py-6"
        initial="top"
        animate={scrollY > 50 ? "scrolled" : "top"}
        variants={headerVariants}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            V2Board
          </motion.a>
          <div className="hidden md:flex space-x-6">
            <motion.a href="#features" className="text-gray-600 hover:text-blue-600" whileHover={{ y: -2 }}>功能</motion.a>
            <motion.a href="#pricing" className="text-gray-600 hover:text-blue-600" whileHover={{ y: -2 }}>价格</motion.a>
          </div>
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              登录
            </Button>
          </motion.div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-blue-600" /> : <Menu className="text-blue-600" />}
          </button>
        </nav>
        {isMenuOpen && (
          <motion.div 
            className="mt-4 flex flex-col space-y-4 md:hidden bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" className="text-gray-600 hover:text-blue-600">功能</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">价格</a>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              登录
            </Button>
          </motion.div>
        )}
      </motion.header>

      <main>
        <section className="h-screen flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold mb-6 text-blue-600">
              安全、快速的 V2Ray 管理面板
            </h1>
            <p className="text-xl mb-8 text-gray-600">轻松管理您的 V2Ray 服务器，提供卓越的用户体验</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                立即开始 <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
              主要功能
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: "高速连接", description: "使用最新的 V2Ray 核心，确保您的连接始终保持最佳状态。", color: "bg-yellow-400" },
                { icon: Shield, title: "安全加密", description: "采用强大的加密算法，保护您的在线隐私和数据安全。", color: "bg-green-400" },
                { icon: Globe, title: "全球节点", description: "提供遍布全球的高质量节点，让您畅享无阻碍的网络体验。", color: "bg-blue-400" },
                { icon: Video, title: "流媒体支持", description: "支持 Netflix、YouTube、Disney+、ChatGPT 等流行服务。", color: "bg-red-400" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${feature.color} mb-4`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-blue-600">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
              选择您的计划
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "基础版", price: "¥19", features: ["100GB 流量/月", "3个 设备同时在线", "基础客户支持", "基础流媒体支持"] },
                { title: "高级版", price: "¥39", features: ["500GB 流量/月", "5个 设备同时在线", "优先客户支持", "高级节点访问", "全面流媒体支持"], popular: true },
                { title: "专业版", price: "¥79", features: ["不限流量", "10个 设备同时在线", "24/7 专属客户支持", "所有节点访问权限", "独立 IP 选项", "全面流媒体支持"] }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`border-none shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-blue-500' : ''} relative overflow-hidden`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-semibold">
                        最受欢迎
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-600">{plan.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {plan.popular ? "适合大多数用户" : plan.title === "基础版" ? "适合轻度用户" : "适合重度用户"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold mb-4 text-blue-600">{plan.price}<span className="text-sm font-normal">/月</span></p>
                      <ul className="space-y-2 text-gray-600">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 