const PlayScriptCompiler = require('./PlayScriptCompiler')
const readline = require('readline')

class PlayScript {
  static parseParams(args) {
    const params = new Map()
    for (let i = 0; i < args.length; ++i) {
      // 输出汇编
      if (args[i] == '-S') {
        params.set('genAsm', true)
        // 帮助信息
      } else if (args[i] == '-h' || args[i] == '--help') {
        params.set('help', true)
        // 显示详细信息
      } else if (args[i] == '-v') {
        params.set('verbose', true)
        // 打印ast
      } else if (args[i] == '-ast-dump') {
        params.set('ast_dump', true)
        // 输出到文件
      } else if (args[i] == '-o') {
        if (i + 1 < args.length) {
          params.set('outputFile', args[++i])
        } else {
          throw new Error('Expecting a file name after -o')
        }
      } else if (args[i].startsWith('-')) {
        throw new Error('Unknow parameter: ' + args[i])
      } else {
        params.set('scriptFile', args[i])
      }
    }
    return params
  }

  static REPL(verbose, ast_dump) {
    console.log('Enjoy PlayScript!')
    let script = ''
    let scriptLet = ''
    const compiler = new PlayScriptCompiler()
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.prompt()
    rl.on('line', line => {
      line = line.trim()
      if (line === 'exit();') {
        console.log('good bye!')
        rl.close()
        return
      }

      scriptLet += line + '\n'
      if (line.endsWith(';')) {
        // 解析
        const at = compiler.compile(script + scriptLet, verbose, ast_dump)
        console.log('=========', at)
        // if (!at.hasCompilationError()) {
        //   const result = compiler.Excute(at)
        //   console.log(result)
        //   script = script + scriptLet
        // }
        // scriptLet = ''
      }
    })
  }
}

// PlayScript.REPL()

// const script =
//   'int age = 44; for(int i = 0;i<10;i++) { age = age + 2;} int i = 8;'

const script = 'int age = 44;'
const compiler = new PlayScriptCompiler()
const at = compiler.compile(script)
console.log(at)

const result = compiler.execute(at)
console.log(result)
