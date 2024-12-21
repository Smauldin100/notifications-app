import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      "role": "system",
      "content": [
        {
          "text": "System Message\nYou are a virtual assistant designed to help users with a broad range of tasks. Your role is to provide accurate, concise, and context-aware responses. You should follow these guidelines in all interactions:\n\nBehavior and Tone\nProfessional and Approachable:\n\nMaintain a tone that is polite, friendly, and professional.\nAdjust your language and detail based on the user's level of familiarity with the topic.\nConcise and Clear:\n\nKeep your responses concise and free of unnecessary information.\nProvide detailed explanations only when requested or contextually relevant.\nContext-Aware:\n\nTailor your responses to the specific user query and ensure continuity in multi-turn conversations.\nAvoid redundant or irrelevant answers.\nCapabilities\nYou are capable of:\n\nAnswering Questions:\nProvide accurate answers to technical, creative, or general knowledge questions.\nGenerating Code:\nWrite, debug, and explain code in various programming languages.\nProvide runnable examples with comments and clear instructions.\nPerforming Tasks:\nAssist with workflows, automations, and integrations.\nCreate detailed project plans, designs, or visualizations.\nCreative Outputs:\nGenerate text, visuals, or structured content for marketing, storytelling, and brainstorming.\nLearning and Adapting:\nAdapt your tone and complexity based on the user’s background and input.\nProvide proactive clarifications if a query is ambiguous.\nConstraints\nAccuracy:\nDo not guess or make assumptions without informing the user. Indicate when further clarification or external tools are required.\nEthics and Privacy:\nAvoid generating harmful, offensive, or unethical content.\nRespect user privacy; do not request personal or sensitive information unless required for functionality.\nGuidelines for Specific Features\nCoding Assistance:\nValidate and optimize code snippets.\nExplain complex logic clearly for users with varying levels of expertise.\nVisual/Design Tasks:\nDescribe generated visuals clearly and follow user-provided details.\nWorkflow and Productivity:\nProvide step-by-step solutions for automating or optimizing workflows.\nSuggest tools or integrations to enhance productivity.\nProactive Assistance\nSuggest Next Steps:\nOffer additional support or guidance when relevant to the user’s query.\nAnticipate follow-up needs (e.g., code deployment after debugging).\nError Handling:\nClearly communicate errors or limitations and offer alternative solutions",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "help t o create an app for API infinite\n",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "Creating an app that works with an API that offers infinite possibilities involves several steps. Here’s a broad overview of the process you can follow. If you have specific requirements or a particular API in mind, feel free to provide more details for tailored guidance.\n\n### Step 1: Define Your App's Purpose\n\n1. **Identify the Core Functionality**:\n   - Determine what problem your app will solve or what service it will provide using the API.\n\n2. **Target Audience**:\n   - Understand who will be using your app, which will help shape its features and design.\n\n### Step 2: Choose the Technology Stack\n\n1. **Frontend**:\n   - Decide on a framework/library, such as React, Angular, Vue.js, or native mobile solutions like Swift for iOS or Kotlin for Android.\n\n2. **Backend**:\n   - Select a suitable backend framework, like Node.js, Django (Python), or Spring Boot (Java).\n\n3. **API Integration**:\n   - Use libraries like Axios for HTTP requests in JavaScript, or Retrofit for Android, to communicate with the API.\n\n### Step 3: API Integration\n\n1. **API Documentation**:\n   - Review the API documentation to understand endpoints, authentication methods, rate limits, and expected inputs/outputs.\n\n2. **Authentication**:\n   - Implement the necessary authentication (such as API keys, OAuth) as required by the API.\n\n3. **Data Handling**:\n   - Code your app to send requests and handle responses effectively, including data parsing and error handling.\n\n### Step 4: App Development\n\n1. **Frontend Development**:\n   - Develop user interfaces and user interactions using the chosen front-end framework.\n\n2. **Backend Development**:\n   - Handle business logic, database interactions, and overall server-side operations.\n\n3. **API Interaction**:\n   - Implement features that interact with the API, including data fetching, updates, and possible synchronization tasks.\n\n### Step 5: Testing\n\n1. **Unit and Integration Tests**:\n   - Write tests to ensure each part of your application works as expected, focusing on features that interact with the API.\n\n2. **End-to-End Testing**:\n   - Simulate real-world usage scenarios to make sure workflows function correctly.\n\n### Step 6: Deployment\n\n1. **Choose Deployment Platforms**:\n   - Use cloud services like AWS, Google Cloud, or Heroku for deploying the backend.\n   - For mobile apps, use app stores; for web apps, consider services like Vercel or Netlify.\n\n2. **Monitoring and Logging**:\n   - Implement monitoring for uptime and performance, as well as logging for backend errors and user interactions.\n\n### Step 7: Maintenance and Updates\n\n1. **User Feedback and Iteration**:\n   - Continuously collect feedback to improve and update features.\n\n2. **API Updates**:\n   - Keep track of any changes or updates in the API and adapt your app accordingly.\n\n### Step 8: Marketing and Launch\n\n1. **Launch Strategy**:\n   - Plan your app launch, including marketing strategies to reach your target audience.\n\n2. **Support and Documentation**:\n   - Provide support channels and maintain comprehensive documentation for users.\n\nIf you provide more details about your specific API or requirements, I can offer more detailed advice and examples on certain steps!",
          "type": "text"
        }
      ]
    }
  ],
  response_format: {
    "type": "json_schema",
    "json_schema": {
      "name": "user_response_schema",
      "schema": {
        "type": "object",
        "required": [
          "intent",
          "response",
          "tone",
          "complexity",
          "ethical_guidelines"
        ],
        "properties": {
          "tone": {
            "enum": [
              "formal",
              "informal",
              "supportive",
              "neutral",
              "assertive"
            ],
            "type": "string",
            "description": "The tone used in the response to align with user expectations."
          },
          "intent": {
            "type": "string",
            "description": "The user’s underlying goal or request."
          },
          "response": {
            "type": "string",
            "description": "A clear and concise reply that aligns with the user's intent."
          },
          "complexity": {
            "enum": [
              "simple",
              "moderate",
              "complex"
            ],
            "type": "string",
            "description": "The complexity level of the response based on user needs."
          },
          "ethical_guidelines": {
            "type": "object",
            "required": [
              "confidentiality",
              "non_discrimination"
            ],
            "properties": {
              "confidentiality": {
                "type": "boolean",
                "description": "Indicates whether the user's information is protected."
              },
              "non_discrimination": {
                "type": "boolean",
                "description": "Indicates commitment to treat all users equally."
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      },
      "strict": true
    }
  },
  tools: [
    {
      "type": "function",
      "function": {
        "name": "assisted_interaction",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "user_query",
            "context",
            "task_type",
            "additional_parameters"
          ],
          "properties": {
            "context": {
              "type": "object",
              "required": [
                "previous_steps",
                "desired_outcome"
              ],
              "properties": {
                "previous_steps": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "description": "Description of previous interactions"
                  },
                  "description": "Array of previous steps taken in the conversation or interaction"
                },
                "desired_outcome": {
                  "type": "string",
                  "description": "What the user ultimately wants to achieve with the query"
                }
              },
              "description": "Additional context that may influence the response",
              "additionalProperties": false
            },
            "task_type": {
              "type": "string",
              "description": "The type of task to be performed (e.g., 'code', 'visual', 'workflow', 'automation')"
            },
            "user_query": {
              "type": "string",
              "description": "The query or request made by the user"
            },
            "additional_parameters": {
              "type": "object",
              "required": [
                "language",
                "visual_type",
                "format"
              ],
              "properties": {
                "format": {
                  "type": "string",
                  "description": "Format of the output (e.g., 'PDF', 'PNG', etc.)"
                },
                "language": {
                  "type": "string",
                  "description": "The programming language to be used (if applicable)"
                },
                "visual_type": {
                  "type": "string",
                  "description": "Type of visual to generate (if applicable)"
                }
              },
              "description": "Any additional parameters that may be needed for the task",
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        "description": "Deliver precise answers, generate and debug code, create visuals, assist with workflows, automate tasks, and provide clear, actionable solutions tailored to user needs, with support for context-aware, multi-step interactions"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "app_integration_features",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "api_integration",
            "workflow_automation",
            "plugin_development",
            "data_syncing",
            "integration_platforms"
          ],
          "properties": {
            "data_syncing": {
              "type": "boolean",
              "description": "Indicates if real-time data syncing is implemented"
            },
            "api_integration": {
              "type": "boolean",
              "description": "Indicates if robust API integration is supported"
            },
            "plugin_development": {
              "type": "boolean",
              "description": "Indicates if custom plugin development is enabled"
            },
            "workflow_automation": {
              "type": "boolean",
              "description": "Indicates if workflow automation tools are available"
            },
            "integration_platforms": {
              "type": "array",
              "items": {
                "enum": [
                  "Zapier",
                  "IFTTT",
                  "cloud_services"
                ],
                "type": "string"
              },
              "description": "List of platforms for integration"
            }
          },
          "additionalProperties": false
        },
        "description": "Provides features that enable seamless interaction with other apps, including robust API integration, workflow automation, custom plugin development, and real-time data syncing."
      }
    },
    {
      "type": "function",
      "function": {
        "name": "live_api_monitoring",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "api_endpoint",
            "monitoring_interval",
            "alert_threshold",
            "track_usage"
          ],
          "properties": {
            "track_usage": {
              "type": "boolean",
              "description": "Flag indicating whether to track API usage statistics"
            },
            "api_endpoint": {
              "type": "string",
              "description": "The endpoint of the API to be monitored"
            },
            "alert_threshold": {
              "type": "number",
              "description": "Threshold for triggering alerts based on error rates"
            },
            "monitoring_interval": {
              "type": "number",
              "description": "Interval in seconds at which the API will be monitored"
            }
          },
          "additionalProperties": false
        },
        "description": "Track API performance, errors, and usage in real-time."
      }
    },
    {
      "type": "function",
      "function": {
        "name": "multi_app_workflow_orchestration",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "app_workflows",
            "trigger_event",
            "schedule"
          ],
          "properties": {
            "schedule": {
              "type": "string",
              "description": "Optional schedule for the workflow execution, if applicable"
            },
            "app_workflows": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "app_name",
                  "actions",
                  "conditions"
                ],
                "properties": {
                  "actions": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "description": "Specific action to be performed"
                    },
                    "description": "List of actions to perform within the application"
                  },
                  "app_name": {
                    "type": "string",
                    "description": "Name of the application involved in the workflow"
                  },
                  "conditions": {
                    "type": "object",
                    "required": [
                      "if_any",
                      "if_all"
                    ],
                    "properties": {
                      "if_all": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "description": "A specific condition in string form"
                        },
                        "description": "Array of conditions where all must be true"
                      },
                      "if_any": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "description": "A specific condition in string form"
                        },
                        "description": "Array of conditions where at least one must be true"
                      }
                    },
                    "description": "Conditions that need to be met for the actions to execute",
                    "additionalProperties": false
                  }
                },
                "additionalProperties": false
              },
              "description": "List of workflows to execute across different applications"
            },
            "trigger_event": {
              "type": "string",
              "description": "The event that triggers the execution of the workflows"
            }
          },
          "additionalProperties": false
        },
        "description": "Automate complex processes across apps like Google Workspace, Slack, and Asana."
      }
    },
    {
      "type": "function",
      "function": {
        "name": "trigger_based_actions",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "event_type",
            "action",
            "conditions"
          ],
          "properties": {
            "action": {
              "type": "object",
              "required": [
                "type",
                "details"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The type of action to perform (e.g., send_email)"
                },
                "details": {
                  "type": "object",
                  "required": [
                    "recipient",
                    "subject",
                    "message"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "description": "Body of the email message"
                    },
                    "subject": {
                      "type": "string",
                      "description": "Subject line of the email"
                    },
                    "recipient": {
                      "type": "string",
                      "description": "Email address of the recipient"
                    }
                  },
                  "additionalProperties": false
                }
              },
              "additionalProperties": false
            },
            "conditions": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "condition_type",
                  "value"
                ],
                "properties": {
                  "value": {
                    "type": "string",
                    "description": "The value to match for the condition (e.g., admin, high)"
                  },
                  "condition_type": {
                    "type": "string",
                    "description": "The type of condition (e.g., user_role, task_priority)"
                  }
                },
                "additionalProperties": false
              },
              "description": "Conditions under which the action is executed"
            },
            "event_type": {
              "type": "string",
              "description": "The type of event that triggers the action (e.g., task_completed)"
            }
          },
          "additionalProperties": false
        },
        "description": "Execute actions based on events or user commands (e.g., send an email when a task is completed)"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "generate_scripts",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "operation_type",
            "script_params"
          ],
          "properties": {
            "script_params": {
              "type": "object",
              "required": [
                "file_format",
                "target_system",
                "repeat_count",
                "custom_commands"
              ],
              "properties": {
                "file_format": {
                  "type": "string",
                  "description": "The format of the script file (e.g., .sh, .py, .rb)"
                },
                "repeat_count": {
                  "type": "number",
                  "description": "Number of times to repeat the operation"
                },
                "target_system": {
                  "type": "string",
                  "description": "The target system for the scripts (e.g., Linux, Windows)"
                },
                "custom_commands": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "description": "A custom command to be executed"
                  },
                  "description": "List of custom commands to include in the script"
                }
              },
              "description": "Parameters required for the script generation",
              "additionalProperties": false
            },
            "operation_type": {
              "type": "string",
              "description": "The type of operation to automate"
            }
          },
          "additionalProperties": false
        },
        "description": "Generate scripts for repetitive or bulk operations"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "real_time_data_sync",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "source_tool",
            "target_tools",
            "data_fields",
            "sync_frequency"
          ],
          "properties": {
            "data_fields": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "Specific data fields to sync."
              },
              "description": "The fields of data that need to be synchronized."
            },
            "source_tool": {
              "type": "string",
              "description": "The tool from which data will be synchronized."
            },
            "target_tools": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "Each target tool for data synchronization."
              },
              "description": "The tools to which data will be synchronized."
            },
            "sync_frequency": {
              "enum": [
                "instantaneous",
                "hourly",
                "daily",
                "weekly"
              ],
              "type": "string",
              "description": "Frequency at which data synchronization occurs."
            }
          },
          "additionalProperties": false
        },
        "description": "Keep data updated across tools like Notion, Trello, and Salesforce."
      }
    },
    {
      "type": "function",
      "function": {
        "name": "smart_updates",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "data_sources",
            "cleanup_strategies",
            "conflict_handling"
          ],
          "properties": {
            "data_sources": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "Identifier for a data source"
              },
              "description": "List of data sources to be processed"
            },
            "conflict_handling": {
              "enum": [
                "keep_latest",
                "keep_oldest",
                "manual_review"
              ],
              "type": "string",
              "description": "Method for resolving data conflicts"
            },
            "cleanup_strategies": {
              "type": "array",
              "items": {
                "enum": [
                  "remove_duplicates",
                  "merge_conflicts",
                  "standardize_format",
                  "validate_entries"
                ],
                "type": "string",
                "description": "Specific cleanup or merging strategy"
              },
              "description": "Strategies to apply for data cleanup and conflict resolution"
            }
          },
          "additionalProperties": false
        },
        "description": "Suggest and execute data cleanup, merging, or conflict resolution"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "build_integration",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "platform",
            "plugin_name",
            "version",
            "developer",
            "description"
          ],
          "properties": {
            "version": {
              "type": "string",
              "description": "The version of the plugin"
            },
            "platform": {
              "type": "string",
              "description": "The name of the platform for which the integration is being built (e.g., Visual Studio Code, Figma, Adobe)"
            },
            "developer": {
              "type": "string",
              "description": "Name of the developer or development team"
            },
            "description": {
              "type": "string",
              "description": "A brief description of the plugin functionality"
            },
            "plugin_name": {
              "type": "string",
              "description": "The name of the specific plugin being developed"
            }
          },
          "additionalProperties": false
        },
        "description": "Build integrations for platforms like Visual Studio Code, Figma, or Adobe tools"
      }
    },
    {
      "type": "function",
      "function": {
        "name": "execute_conversational_task",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "task_description",
            "apps",
            "context"
          ],
          "properties": {
            "apps": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "Application name or identifier"
              },
              "description": "List of applications involved in the task execution"
            },
            "context": {
              "type": "object",
              "required": [
                "user_id",
                "timestamp"
              ],
              "properties": {
                "user_id": {
                  "type": "string",
                  "description": "Unique identifier for the user initiating the task"
                },
                "timestamp": {
                  "type": "string",
                  "description": "Time when the task was initiated"
                }
              },
              "description": "Optional context for the task execution",
              "additionalProperties": false
            },
            "task_description": {
              "type": "string",
              "description": "A natural language description of the task to be executed"
            }
          },
          "additionalProperties": false
        },
        "description": "Use natural language to trigger multi-step tasks across apps."
      }
    },
    {
      "type": "function",
      "function": {
        "name": "voice_control_commands",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "command",
            "assistant",
            "voice_confirmation"
          ],
          "properties": {
            "command": {
              "type": "string",
              "description": "The specific command or instruction to be executed by the smart assistant."
            },
            "assistant": {
              "enum": [
                "Alexa",
                "Siri",
                "Google Assistant"
              ],
              "type": "string",
              "description": "The smart assistant being used (e.g., 'Alexa', 'Siri')."
            },
            "voice_confirmation": {
              "type": "boolean",
              "description": "Indicates whether to confirm the command with voice feedback."
            }
          },
          "additionalProperties": false
        },
        "description": "Integrate with smart assistants like Alexa or Siri for hands-free interaction."
      }
    },
    {
      "type": "function",
      "function": {
        "name": "email_automation",
        "strict": true,
        "parameters": {
          "type": "object",
          "required": [
            "recipient",
            "subject",
            "body",
            "schedule_time",
            "cc",
            "bcc"
          ],
          "properties": {
            "cc": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "CC email address"
              },
              "description": "CC email addresses"
            },
            "bcc": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "BCC email address"
              },
              "description": "BCC email addresses"
            },
            "body": {
              "type": "string",
              "description": "Content of the email"
            },
            "subject": {
              "type": "string",
              "description": "Subject line of the email"
            },
            "recipient": {
              "type": "string",
              "description": "Email address of the recipient"
            },
            "schedule_time": {
              "type": "string",
              "description": "Time to schedule the email in ISO 8601 format (e.g., '2023-10-01T14:30:00Z')"
            }
          },
          "additionalProperties": false
        },
        "description": "Draft, send, and schedule emails using tools like Gmail or Outlook."
      }
    }
  ],
  temperature: 1,
  max_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0.28,
  presence_penalty: 0
});